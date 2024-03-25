import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Stores from "./Stores";

@Entity()
export default class StoreTypes {
	constructor(id: string, name: string, createdAt: Date, updatedAt: Date) {
		this.Id = id;
		this.Name = name;
		this.Created_At = createdAt;
		this.Updated_At = updatedAt;
	}
	@PrimaryGeneratedColumn("increment", { name: "id" })
	Id: string;

	@Column("varchar", { length: 150, name: "title" })
	Name: string;

	@CreateDateColumn({ name: "created_at" })
	Created_At: Date;

	@UpdateDateColumn({ name: "updated_at" })
	Updated_At: Date;

	@OneToMany(() => Stores, (store) => store.StoreType)
	Store: Stores[];
}
