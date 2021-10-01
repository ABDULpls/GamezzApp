import api from '../config/api';

export default {
    fetchUserFriends(userId) {
        //return api.get(userFriendsUrl);
        return Promise.resolve({data: [
            {
                "id": 11,
                "avatar": "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
                "name": "Sinderella",
                "isOnline": true,
                "isFriend": true,
                "onlineStatus": "В сети"
            },
            {
                "id": 12,
                "name": "InKey",
                "avatar": "https://cdn.gamezz.io/avatars/m/v/2295_64x64.jpg",
                "isOnline": true,
                "isFriend": true,
                "onlineStatus": "В сети"
            },
            {
                "id": 13,
                "name": "Treena",
                "avatar": "https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg",
                "isOnline": false,
                "isFriend": true,
                "onlineStatus": "Последний визит месяц назад"
            },
            {
                "id": 14,
                "name": "GameTycoon",
                "avatar": "https://cdn.gamezz.io/avatars/a/i/4854_64x64.jpg",
                "isOnline": false,
                "isFriend": true,
                "onlineStatus": "Последний визит 5 мин. назад"
            }
        ]});
    },

    fetchUsers() {
        //return api.get(usersUrl);
        return Promise.resolve({data: [
                {
                    "id": 15,
                    "avatar": "https://cdn.gamezz.io/avatars/u/s/1707_64x64.jpg",
                    "name": "Lolipoli",
                    "isOnline": true,
                    "isFriend": false,
                    "onlineStatus": "В сети"
                },
                {
                    "id": 17,
                    "name": "TheEnd",
                    "avatar": "https://cdn.gamezz.io/avatars/m/v/2295_64x64.jpg",
                    "isOnline": false,
                    "isFriend": false,
                    "onlineStatus": "Минуту назад"
                },
                {
                    "id": 16,
                    "name": "Trulala",
                    "avatar": "https://cdn.gamezz.io/avatars/o/b/1677_64x64.jpg",
                    "isOnline": false,
                    "isFriend": false,
                    "onlineStatus": "Последний визит месяц назад"
                },
        ]});
    }
};