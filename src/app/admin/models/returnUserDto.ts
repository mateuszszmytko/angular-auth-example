
export class ReturnUserDto {
	id: string;
	userName: string;
	email: string;
	emailConfirmed: boolean;
	roles: string[];
	registerDate: Date;
}