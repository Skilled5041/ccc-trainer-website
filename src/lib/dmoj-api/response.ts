export type DmojApiResponse<T> = {
	error?: {
		code: number;
		message: string;
	};
	data?: {
		object: T;
	};
};
