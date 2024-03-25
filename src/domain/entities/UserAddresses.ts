import {
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

export default class UserAddresses {
	constructor(
		id: string,
		userId: string,
		address: string,
		number: string,
		addressComplement: string,
		isDefault: boolean,
		createdAt: Date,
		updatedAt: Date,
	) {
		this.Id = id;
		this.UserId = userId;
		this.Address = address;
		this.Number = number;
		this.AddressComplement = addressComplement;
		this.IsDefault = isDefault;
		this.CreatedAt = createdAt;
		this.UpdatedAt = updatedAt;
	}

	@PrimaryGeneratedColumn("uuid", { name: "id" })
	Id: string;

	@Column("uuid", { name: "user_id" })
	UserId: string;

	@Column("varchar", { length: 300, name: "address" })
	Address: string;

	@Column("varchar", { length: 10, name: "number" })
	Number: string;

	@Column("varchar", { length: 50, name: "address_complement" })
	AddressComplement: string;

	@Column("bit", { name: "is_default" })
	IsDefault: boolean;

	@CreateDateColumn({ name: "created_at" })
	CreatedAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	UpdatedAt: Date;
}
