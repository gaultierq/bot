# Migration `20200915120712-add-kind-to-interaction`

This migration has been generated by Quentin Gaultier at 9/15/2020, 3:07:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "InteractionKind" AS ENUM ('STATEMENT', 'QUESTION');

ALTER TABLE "public"."Interaction" ADD COLUMN "kind" "InteractionKind" NOT NULL DEFAULT E'STATEMENT';
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200915120144-create-anszers..20200915120712-add-kind-to-interaction
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
@@ -35,8 +35,14 @@
   image     String?
   author    User?       @relation(fields: [authorId], references: [id])
 }
+enum InteractionKind {
+    STATEMENT
+    QUESTION
+}
+
+
 model Interaction {
   id            String          @default(cuid()) @id
   createdAt     DateTime        @default(now())
   botId         String?
@@ -44,8 +50,9 @@
   bot           Bot?            @relation(fields: [botId], references: [id])
   predecessorId String?
   predecessor   Interaction?    @relation("Node", fields: [predecessorId], references: [id])
   successor     Interaction?    @relation("Node")
+  kind          InteractionKind @default(STATEMENT)
 }
 model Conversation {
   id            String          @default(cuid()) @id
```

