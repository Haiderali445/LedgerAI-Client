import { env } from '../config/env';
import { logger } from '../telemetry/logger';

export type SignalREventCallback = (payload: unknown) => void;

class MockSignalRClient {
  private hubUrl: string;
  private listeners: Map<string, Set<SignalREventCallback>> = new Map();
  private isConnected = false;

  constructor() {
    this.hubUrl = env.signalRHubUrl;
  }

  async start(): Promise<void> {
    if (this.isConnected) return;
    this.isConnected = true;
    logger.info('SignalR', `Connected to real-time hub at ${this.hubUrl} (Simulation/WebSocket)`);
  }

  async stop(): Promise<void> {
    this.isConnected = false;
    logger.info('SignalR', 'Hub disconnected');
  }

  on(eventName: string, callback: SignalREventCallback): () => void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, new Set());
    }
    this.listeners.get(eventName)?.add(callback);

    return () => {
      this.listeners.get(eventName)?.delete(callback);
    };
  }

  emit(eventName: string, payload: unknown): void {
    const callbacks = this.listeners.get(eventName);
    if (callbacks) {
      callbacks.forEach((cb) => cb(payload));
    }
  }
}

export const signalrClient = new MockSignalRClient();
