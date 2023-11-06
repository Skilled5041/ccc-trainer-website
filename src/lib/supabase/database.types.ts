export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			problems: {
				Row: {
					code: string;
					created_at: string;
					group: string;
					id: number;
					is_organization_private: boolean;
					is_public: boolean;
					name: string;
					partial: boolean;
					points: number;
					types: string[];
				};
				Insert: {
					code: string;
					created_at?: string;
					group: string;
					id?: number;
					is_organization_private: boolean;
					is_public: boolean;
					name: string;
					partial: boolean;
					points: number;
					types: string[];
				};
				Update: {
					code?: string;
					created_at?: string;
					group?: string;
					id?: number;
					is_organization_private?: boolean;
					is_public?: boolean;
					name?: string;
					partial?: boolean;
					points?: number;
					types?: string[];
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			problems_in: {
				Args: {
					vals: string[];
				};
				Returns: {
					code: string;
					created_at: string;
					group: string;
					id: number;
					is_organization_private: boolean;
					is_public: boolean;
					name: string;
					partial: boolean;
					points: number;
					types: string[];
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
