export type DmojResponse<T> = Error | Data<T>;

export interface Error {
	error: {
		code: string;
		message: string;
	};
}

export interface Data<T> {
	data: T;
}
