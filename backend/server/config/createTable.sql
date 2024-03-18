-- Table: employee_management_system.employees

-- DROP TABLE IF EXISTS employee_management_system.employees;

CREATE TABLE IF NOT EXISTS employee_management_system.employees
(
    id bigint NOT NULL DEFAULT nextval('employee_management_system.employees_id_seq'::regclass),
    email_id character varying(255) COLLATE pg_catalog."default",
    first_name character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    phone_number text COLLATE pg_catalog."default",
    project text COLLATE pg_catalog."default",
    CONSTRAINT employees_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS employee_management_system.employees
    OWNER to postgres;