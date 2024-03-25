import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Stores from "./Stores";

@Entity()
export default class StoreCategories {
	constructor(id: string, title: string, storeId: string) {
		this.Id = id;
		this.Title = title;
		this.StoreId = storeId;
	}
	@PrimaryGeneratedColumn("uuid", { name: "id" })
	Id: string;

	@Column("varchar", { length: 150, name: "title" })
	Title: string;

	@Column("uuid", { name: "store_id" })
	StoreId: string;

	@ManyToOne(() => Stores, (store) => store.StoreCategories)
	Store: Stores;
}
