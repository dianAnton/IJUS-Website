# gemini.md (Project Constitution)

## Data Schemas
**Confirmed Payload Structures:**

```json
{
  "Subscriber": {
    "id": "uuid",
    "name": "string (optional)",
    "contact_method": "enum: ['email', 'whatsapp']",
    "contact_value": "string (email address or phone number)",
    "subscribed_at": "datetime"
  },
  "Event": {
    "id": "uuid",
    "title": "string",
    "description": "text",
    "date": "datetime",
    "location": "string (default: Constantino 104, Santiago)",
    "image_url": "text (optional)",
    "created_by": "uuid (admin_id)"
  },
  "Notice": {
    "id": "uuid",
    "title": "string",
    "content": "text",
    "published_at": "datetime",
    "author": "string"
  }
}
```

## Behavioral Rules
- Follow B.L.A.S.T Protocol Strictness
- Follow A.N.T. 3-Layer Build
- Halt execution until Schema Validation
- Output payload structure strictly confirmed

## Architectural Invariants
Layer 1: SOPs (`architecture/`)
Layer 2: Reasoning / Tool Router
Layer 3: Deterministic logic (`tools/`)
