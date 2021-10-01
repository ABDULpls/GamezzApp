export const DEFAULT_TRANSITION = 'fade';
export const USER_STORAGE_KEY = 'user';

export const PAGE_FOOTER_MENU = [
    {
        label: 'Игры',
        className: 'footer-games',
        routeName: 'HomePage',
    },
    {
        label: 'Зал Славы',
        className: 'footer-fame',
        routeName: 'FamePage',
    },
    {
        label: 'Турниры',
        className: 'footer-tournaments',
        routeName: 'TournamentsPage',
    },
    {
        label: 'Викторина',
        className: 'footer-quiz',
        routeName: 'QuizPage',
    },
    {
        label: 'Еще',
        className: 'footer-more',
        routeName: 'ProfilePreviewPage',
    },
];

export const PROFILE_MENU = {
    dialogs: {
        label: 'Диалоги',
        className: 'more-dialogs',
        routeName: 'ProfileDialogsPage',
    },
    friends: {
        label: 'Друзья',
        className: 'more-friends',
        routeName: 'ProfileFriendsPage',
    },
    wallet:{
        label: 'Кошелек',
        className: 'more-wallet',
        routeName: 'ProfileWalletPage',
    },
    blackList:{
        label: 'Черный список',
        className: 'more-blacklist',
        routeName: 'ProfileBlackListPage',
    },
};