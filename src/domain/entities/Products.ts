import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export default class Products {
	constructor(
		id: string,
		name: string,
		value: number,
		storeId: string,
		description: string,
		storeCategoryId: string,
		weight: string,
		peopleServed: number,
		createdAt: Date,
		updatedAt: Date,
	) {
		this.Id = id;
		this.Name = name;
		this.Value = value;
		this.StoreId = storeId;
		this.Description = description;
		this.StoreCategoryId = storeCategoryId;
		this.Weight = weight;
		this.PeopleServed = peopleServed;
		this.Created_At = createdAt;
		this.Updated_At = updatedAt;
	}

	@PrimaryGeneratedColumn("uuid", { name: "id" })
	Id: string;

	@Column("varchar", { length: 150, name: "name" })
	Name: string;

	@Column("numeric", { name: "value" })
	Value: number;

	@Column("uuid", { name: "store_id" })
	StoreId: string;

	@Column("varchar", { length: 300, name: "description" })
	Description: string;

	@Column("uuid", { name: "store_category_id" })
	StoreCategoryId: string;

	@Column("varchar", { length: 8, name: "weight" })
	Weight: string;

	@Column("integer", { name: "people_served" })
	PeopleServed: number;

	@CreateDateColumn({ name: "created_at" })
	Created_At: Date;

	@UpdateDateColumn({ name: "updated_at" })
	Updated_At: Date;
}
