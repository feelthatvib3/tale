interface User {
	id: string;
	userId: string;
	games?: Game[];
	stats: UserMetrics;
}

interface Guild {
	id: string;
	guildId: string;
	eventmakers: string[];
}

interface Game {
	id: string;
	gameId: string;
	host: string;
	players: string[];
	mvp: string;
	story: StoryPart[];
	startedAt: Date;
	finishedAt?: Date;
	isAborted: boolean;
	isFinished: boolean;
}

type StoryPart = {
	userId: string;
	userPart: string;
};

type UserMetrics = {
	totalGames: number;
	hostedGames: number;
	mvpScore: number;
	bestPartScore: number;
};
