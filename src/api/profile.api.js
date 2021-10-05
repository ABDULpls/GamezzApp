import api from '../config/api';
import {asyncDelay} from '../utils/utils';

export default {
    fetchUserFriends(userId) {
        //return api.get(userFriendsUrl);
        return Promise.resolve({
            data: [
                {
                    'id': 11,
                    'avatar': 'https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg',
                    'name': 'Sinderella',
                    'isOnline': true,
                    'isFriend': true,
                    'onlineStatus': 'В сети',
                },
                {
                    'id': 12,
                    'name': 'InKey',
                    'avatar': 'https://cdn.gamezz.io/avatars/m/v/2295_64x64.jpg',
                    'isOnline': true,
                    'isFriend': true,
                    'onlineStatus': 'В сети',
                },
                {
                    'id': 13,
                    'name': 'Treena',
                    'avatar': 'https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg',
                    'isOnline': false,
                    'isFriend': true,
                    'onlineStatus': 'Последний визит месяц назад',
                },
                {
                    'id': 14,
                    'name': 'GameTycoon',
                    'avatar': 'https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg',
                    'isOnline': false,
                    'isFriend': true,
                    'onlineStatus': 'Последний визит 5 мин. назад',
                },
            ],
        });
    },

    fetchUserBlackList(userId) {
        //return api.get(userFriendsUrl);
        return Promise.resolve({
            data: [
                {
                    'id': 11,
                    'avatar': 'https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg',
                    'name': 'Sinderella',
                    'isOnline': true,
                    'isBlocked': true,
                    'onlineStatus': 'В сети',
                },
                {
                    'id': 12,
                    'name': 'InKey',
                    'avatar': 'https://cdn.gamezz.io/avatars/m/v/2295_64x64.jpg',
                    'isOnline': true,
                    'isBlocked': true,
                    'onlineStatus': 'В сети',
                },
                {
                    'id': 13,
                    'name': 'Treena',
                    'avatar': 'https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg',
                    'isOnline': false,
                    'isBlocked': true,
                    'onlineStatus': 'Последний визит месяц назад',
                },
                {
                    'id': 14,
                    'name': 'GameTycoon',
                    'avatar': 'https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg',
                    'isOnline': false,
                    'isBlocked': true,
                    'onlineStatus': 'Последний визит 5 мин. назад',
                },
            ],
        });
    },

    fetchUsers() {
        //return api.get(usersUrl);
        return Promise.resolve({
            data: [
                {
                    'id': 15,
                    'avatar': 'https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg',
                    'name': 'Lolipoli',
                    'isOnline': true,
                    'isFriend': false,
                    'onlineStatus': 'В сети',
                },
                {
                    'id': 17,
                    'name': 'TheEnd',
                    'avatar': 'https://cdn.gamezz.io/avatars/m/v/2295_64x64.jpg',
                    'isOnline': false,
                    'isFriend': false,
                    'onlineStatus': 'Минуту назад',
                },
                {
                    'id': 16,
                    'name': 'Trulala',
                    'avatar': 'https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg',
                    'isOnline': false,
                    'isFriend': false,
                    'onlineStatus': 'Последний визит месяц назад',
                },
            ],
        });
    },

    fetchFavoriteGames(userId) {
        return Promise.resolve({
            data: [
                {
                    id: 1,
                    slug: 'minesweeper',
                    name: 'Сапер',
                    image: {
                        jpg: 'https://cdn.gamezz.io/games/1_optimize.jpg',
                        webp: 'https://cdn.gamezz.io/games/1_optimize.webp',
                    }
                },
                {
                    id: 5,
                    slug: 'solitaire-spider',
                    name: 'Пасьянс Паук',
                    image: {
                        jpg: 'https://cdn.gamezz.io/games/5_optimize.jpg',
                        webp: 'https://cdn.gamezz.io/games/5_optimize.webp',
                    }
                },
                {
                    id: 6,
                    slug: 'wordsfind',
                    name: 'Найди слова',
                    image: {
                        jpg: 'https://cdn.gamezz.io/games/6_optimize.jpg',
                        webp: 'https://cdn.gamezz.io/games/6_optimize.webp',
                    }
                },
                {
                    id: 9,
                    slug: 'fool-classic',
                    name: 'Дурак Простой',
                    image: {
                        jpg: 'https://cdn.gamezz.io/games/9_optimize.jpg',
                        webp: 'https://cdn.gamezz.io/games/9_optimize.webp',
                    }
                },
            ],
        });
    },

    async fetchRewards(userId) {
        //await asyncDelay(500);
        return Promise.resolve({
            data: [
                {
                    id: 1,
                    count: 2,
                    iconUrl: 'https://gamezz.io/achievements/1.png',
                },
                {
                    id: 9,
                    count: 1,
                    iconUrl: 'https://gamezz.io/achievements/9.png',
                },
                {
                    id: 2,
                    count: 3,
                    iconUrl: 'https://gamezz.io/achievements/2.png',
                },
            ],
        });
    }
};