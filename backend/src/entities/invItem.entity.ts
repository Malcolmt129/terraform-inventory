/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class invItem {
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    payment_id:number;

    @Column()
    amount:number;

    @Column()
    department: string;

    @Column()
    location: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    purchase_date: Date;

    @Column()
    unit_price: number;

    @Column()
    memo: string;

    @Column()
<<<<<<< Updated upstream
    lifespan: Number;
=======
    lifespan: string;
>>>>>>> Stashed changes
}