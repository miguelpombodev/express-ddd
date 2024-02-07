import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class Users {
	constructor(
		id: string,
		name: string,
		phone: string,
		email: string,
		password: string,
		cpf: string,
		created_at: Date,
		updated_at: Date,
	) {
		this.Id = id;
		this.Name = name;
		this.Phone = phone;
		this.Email = email;
		this.Password = password;
		this.CPF = cpf;
		this.Created_At = created_at;
		this.Updated_At = updated_at;
	}

	@PrimaryGeneratedColumn("uuid", { name: "id" })
	Id: string;

	@Column("varchar", { length: 200, name: "name" })
	Name: string;

	@Column("varchar", { length: 12, name: "phone" })
	Phone: string;

	@Column("varchar", { length: 100, name: "email" })
	Email: string;

	@Column("text", { name: "password" })
	Password: string;

	@Column("varchar", { length: 11, name: "cpf" })
	CPF: string;

	@CreateDateColumn({ name: "created_at" })
	Created_At: Date;

	@UpdateDateColumn({ name: "updated_at" })
	Updated_At: Date;
}
