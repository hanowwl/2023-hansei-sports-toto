create table "public"."user" (
    "id" uuid not null,
    "student_no" character varying not null,
    "name" character varying not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."user" enable row level security;

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (id);

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

alter table "public"."user" add constraint "user_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."user" validate constraint "user_id_fkey";

create policy "Enable insert for authenticated users and only own data"
on "public"."user"
as permissive
for insert
to authenticated
with check ((auth.uid() = id));


create policy "Enable read access for authenticated users and only own data."
on "public"."user"
as permissive
for select
to authenticated
using ((auth.uid() = id));



