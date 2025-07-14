# How to Run
On two different terminals
- node server.js
- node client.js

# gRPC vs REST: Pros and Cons

## gRPC Pros
- **High performance:** Uses HTTP/2 and binary Protobuf for faster and smaller messages.
- **Strongly typed contracts:** `.proto` files ensure strict API definitions and auto-generated client/server code.
- **Built-in streaming:** Supports client, server, and bidirectional streaming natively.
- **Efficient multiplexing:** Multiple requests share a single HTTP/2 connection, reducing overhead.
- **Multi-language support:** Official support for many languages with code generation.
- **Ideal for microservices:** Great for internal service-to-service communication.

## gRPC Cons
- **Complexity:** Requires learning Protocol Buffers and `.proto` file management.
- **Limited browser support:** Browsers don’t natively support gRPC; requires gRPC-Web proxy.
- **Harder debugging:** Binary protocol is less human-readable than JSON.
- **Less flexible with REST tools:** Incompatible with common REST tools like Postman without extra setup.
- **Not ideal for simple CRUD:** Adds overhead for simple, stateless APIs.

## REST Pros
- **Simplicity:** Uses human-readable JSON over HTTP/1.1, easy to understand and debug.
- **Wide browser support:** Works natively with all browsers and HTTP clients.
- **Rich tooling:** Supported by numerous tools (Postman, curl, Swagger).
- **Flexible:** Easy to evolve without strict contracts.
- **Great for public APIs:** Well-suited for external-facing services.

## REST Cons
- **Less efficient:** Text-based JSON and HTTP/1.1 can cause higher latency and bandwidth use.
- **No built-in streaming:** Streaming requires additional protocols or workarounds.
- **Weak typing:** Lack of strong contract enforcement can lead to runtime errors.
- **Multiple connections:** HTTP/1.1 opens separate connections or uses slower pipelining.
