import { MongoClient } from 'mongodb';

class MongoDB {
	private readonly URI: string;
	private readonly client: MongoClient;

	constructor() {
		this.URI = process.env.MONGODB_URI || '';
		this.client = new MongoClient(this.URI);
	}

	async connect(): Promise<void> {
		try {
			await this.client.connect();
			console.log('✅ Successfully connected to MongoDB.');
		} catch (error) {
			console.error('❎ Error connecting to MongoDB:', error);
		}
	}
}

export default new MongoDB();
