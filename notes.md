# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

>software development is a game of abstraction

## A Good data model

- captures all the data needed by the system
- captures ONLY the data needed by the system
- reflects reality(from the point of t=view of the system)
- is flexible(can evolve with the needs of the system)
- guarantee data integrity(without sacrificing too much performance)
- is driven by the way we access the data

## Components

- entities (resources): nouns --> tables
- properties (column, fields, attributes) --> columns
- relationships --> foreign keys

## Workflow

- identify entities (resources): nouns --> tables
- identify properties (column, fields, attributes) --> columns
- identify relationships --> foreign keys

## relationships

- one to one: (rare)
- one to many: (most common) Cascading combo
- many to many: smoke and mirrors, a trick!

## Mantras

- Every table must have a primary key
- work on **two or three** entities at a time
- _one to many_ requires a `foreign key`
- the `Foreign Key` goes on the **many** side.
- the `FK` has to be the same type of what it references
- the _many to many_ requires a **third table**
- the third table can have other columns