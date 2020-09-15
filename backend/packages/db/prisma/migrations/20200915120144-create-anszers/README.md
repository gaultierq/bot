# Migration `20200915120144-create-anszers`

This migration has been generated by Quentin Gaultier at 9/15/2020, 3:01:44 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Answer" (
"id" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"interactionId" text  NOT NULL ,
"conversationId" text  NOT NULL ,
PRIMARY KEY ("id"))

ALTER TABLE "public"."Answer" ADD FOREIGN KEY ("interactionId")REFERENCES "public"."Interaction"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Answer" ADD FOREIGN KEY ("conversationId")REFERENCES "public"."Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Conversation" ADD FOREIGN KEY ("botId")REFERENCES "public"."Bot"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200915115800-create-conversations..20200915120144-create-anszers
--- datamodel.dml
+++ datamodel.dml
@@ -4,9 +4,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model User {
   id        String @default(cuid()) @id
@@ -50,5 +50,15 @@
 model Conversation {
   id            String          @default(cuid()) @id
   createdAt     DateTime        @default(now())
   botId         String?
+  bot           Bot?            @relation(fields: [botId], references: [id])
 }
+
+model Answer {
+  id                String          @default(cuid()) @id
+  createdAt         DateTime        @default(now())
+  interactionId     String
+  interaction       Interaction     @relation(fields: [interactionId], references: [id])
+  conversationId    String
+  conversation      Conversation    @relation(fields: [conversationId], references: [id])
+}
```

