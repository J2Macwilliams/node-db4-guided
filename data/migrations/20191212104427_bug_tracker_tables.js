exports.up = function(knex) {
	return knex.schema
		.createTable('roles', tbl => {
			tbl.increments();
			tbl
				.string('name', 255)
				.notNullable()
				.unique();
		})

		.createTable('employees', tbl => {
			tbl.increments();
			tbl.string('name', 255).notNullable();

			// Foreign Key
			tbl
				.integer('role id')
				.unsigned()
				.notNullable()
				.reference('id')
				.inTable('roles')
				.onDelete('CASCADE') //CASCADE, RESTRICT, DO NOTHING, SET NULL
				.onUpdate('CASCADE');
		})

		.createTable('tickets', tbl => {
			tbl.increments();
			tbl.string('description', 255).notNullable();
		})

		.createTable('employee_tickets', tbl => {
			tbl.primary(['ticket_id', 'employee_id']);

			tbl.integer();
			tbl.string('name', 255).notNullable();
			// Foreign Key
			tbl
				.integer('role id')
				.unsigned()
				.notNullable()
				.reference('id')
				.inTable('roles');
		});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('employee_tickets');
};
