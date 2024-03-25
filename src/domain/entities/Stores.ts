import {
	Column,
	CreateDateColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import StoreTypes from "./StoreTypes";
import StoreCategories from "./StoreCategories";

export default class Stores {
	constructor(
		id: string,
		name: string,
		avatar: string,
		storeTypeId: number,
		description: string,
		orderMinValue: number,
		openAt: Date,
		closedAt: Date,
		address: string,
		cnpj: string,
		createdAt: Date,
		updatedAt: Date,
	) {
		this.Id = id;
		this.Name = name;
		this.Avatar = avatar;
		this.StoreTypeId = storeTypeId;
		this.Description = description;
		this.OrderMinValue = orderMinValue;
		this.OpenAt = openAt;
		this.ClosedAt = closedAt;
		this.Address = address;
		this.CNPJ = cnpj;
		this.CreatedAt = createdAt;
		this.UpdatedAt = updatedAt;
	}

	@PrimaryGeneratedColumn("uuid", { name: "id" })
	Id: string;

	@Column("varchar", { length: 150, name: "name" })
	Name: string;

	@Column("varchar", { length: 150, name: "avatar" })
	Avatar: string;

	@Column("int", { name: "store_type_id" })
	StoreTypeId: number;

	@ManyToOne(() => StoreTypes, (storeType) => storeType.Id)
	StoreType: number;

	@Column("varchar", { length: 8000, name: "description" })
	Description: string;

	@Column("numeric", { name: "order_min_value" })
	OrderMinValue: number;

	@Column("time", { name: "open_at" })
	OpenAt: Date;

	@Column("time", { name: "closed_at" })
	ClosedAt: Date;

	@Column("varchar", { length: 1000, name: "address" })
	Address: string;

	@Column("varchar", { length: 14, name: "cnpj" })
	CNPJ: string;

	@OneToMany(() => StoreCategories, (storeCategory) => storeCategory.Store)
	StoreCategories: StoreCategories[];

	@CreateDateColumn({ name: "created_at" })
	CreatedAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	UpdatedAt: Date;
}
