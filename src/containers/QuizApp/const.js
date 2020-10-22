export const EVENT_GA = {
    VIEW: {
        PAGE_1: 'page_1',
        PAGE_2: 'page_2',
        PAGE_3: 'page_3',
        PAGE_4: 'page_4',
        PAGE_5: 'page_5',
        PAGE_6: 'page_6',
        PAGE_7: 'page_7',
    },
    CLICK: {
        CATEGORY_NAME: 'CLICK',
        CTA_START: 'CTA_START',
        SHARE: 'SHARE',
        SHARE_IMAGE: 'SHARE_IMAGE',
        SELECT: 'SELECT',
        CLOSE: 'CLOSE',
    },
    SELECT: {
        CATEGORY_NAME: 'SELECT',
    },
    UNSELECT: {
        CATEGORY_NAME: 'UNSELECT',
    },
    SHARE: {
        CATEGORY_NAME: 'SHARE',
    },
    SHARE_PER_CLICK: {
        CATEGORY_NAME: 'SHARE_PER_CLICK',
    },
    CAPTURE: {
        CATEGORY_NAME: 'CAPTURE',
    },
    SWIPE: {
        CATEGORY_NAME: 'SWIPE',
    },
}

export const fadeInLeft = {
    initial: {
        x: 200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    transition: { delay: 0.3 },
}

export const easing = [0.6, -0.05, 0.01, 0.99]

export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
}

export const LIST_QUIZ = [
    {
        id: 1,
        question: 'Một ngày của bạn thường bắt đầu thế nào?',
        answer: [
            {
                id: 1,
                content: 'Tắt báo thức & ngủ tiếp ⏰',
                value: 70,
                isSpecial: true,
            },
            {
                id: 2,
                content: 'Thể dục thể thao 💪',
                value: 1,
                isSpecial: false,
            },
            {
                id: 3,
                content: 'Lao ngay vào bếp 🍳',
                value: 2,
                isSpecial: false,
            },
            {
                id: 4,
                content: 'Nhâm nhi chút cafe & đọc sách 📖',
                value: 20,
                isSpecial: true,
            },
        ],
    },
    {
        id: 2,
        question: 'Điều đầu tiên bạn nghĩ đến sau bữa sáng là?',
        answer: [
            {
                id: 1,
                content: 'Deadline 😱',
                value: 90,
                isSpecial: true,
            },
            {
                id: 2,
                content: 'Trưa nay ăn gì nhỉ? 🤔',
                value: 2,
                isSpecial: false,
            },
            {
                id: 3,
                content: 'Bữa xế no nê 😋',
                value: 1,
                isSpecial: false,
            },
            {
                id: 4,
                content: 'Phố lên đèn cho em lên đồ 🤩',
                value: 50,
                isSpecial: true,
            },
        ],
    },
    {
        id: 3,
        question: 'Thức uống xoa dịu tâm hồn bạn là...',
        answer: [
            { id: 1, content: 'Trà sữa 🥛🍵', value: 1, isSpecial: false },
            { id: 2, content: '1 ánh mắt 🤑', value: 100, isSpecial: true },
            {
                id: 3,
                content: 'Ly cafe ban mê ☕️',
                value: 40,
                isSpecial: true,
            },
            {
                id: 4,
                content: 'Sinh tố mát lành 🍹',
                value: 2,
                isSpecial: false,
            },
        ],
    },
    {
        id: 4,
        question: 'Với bạn, một bữa tối lý tưởng đó là?',
        answer: [
            {
                id: 1,
                content: 'Vào bếp nấu vài món tủ 🍲🥘🍤',
                value: 60,
                isSpecial: true,
            },
            {
                id: 2,
                content: 'Đi ăn nhà hàng xịn sò 🍽',
                value: 2,
                isSpecial: false,
            },
            {
                id: 3,
                content: 'Tém miệng cho eo thon 😭',
                value: 1,
                isSpecial: false,
            },
            {
                id: 4,
                content: 'Đặt đồ ăn vặt qua app nè 🍡',
                value: 11,
                isSpecial: true,
            },
        ],
    },
    {
        id: 5,
        question: 'Một việc bạn nhất định phải làm trước khi đi ngủ...',
        answer: [
            {
                id: 1,
                content: 'Vừa tắm vừa hát 🛁 🎤',
                value: 2,
                isSpecial: false,
            },
            {
                id: 2,
                content: 'Chăm sóc da mặt 😉',
                value: 30,
                isSpecial: true,
            },
            { id: 3, content: '"Yêu" 😗', value: 80, isSpecial: true },
            {
                id: 4,
                content: 'Đương nhiên là nhắm mắt 😌',
                value: 1,
                isSpecial: false,
            },
        ],
    },
]

// https://docs.google.com/spreadsheets/d/1H8x1-owhx5vm8dPg8QbCBlGsvedayfFdRAGB7KObIvw/edit#gid=0

export const LIST_RESULT = {
    70: {
        background: 'background-2',
        color: 'text-pink',
        label: 'Hoa Mười Giờ',
        imgSrc: 'hoa_10_gio',
        mainContent: `Thức đêm mới biết đêm dài
Ngủ ngày mới biết ngày dài hơn đêm 😴`,
        subContent: `Năng lượng tích lũy từ tối đến (10 giờ) sáng khiến bạn luôn tràn trề sức sống và lan toả đến mọi người xung quanh.`,
    },
    20: {
        background: 'background-2',
        color: 'text-red',
        label: 'Hoa Trạng Nguyên',
        imgSrc: 'hoa_trang_nguyen',
        mainContent: `Người đâu học rộng, biết sâu
Trạng nguyên là bạn, thật giàu trí khôn`,
        subContent: `Sở hữu vẻ đẹp thông tuệ từ trong ra ngoài, bạn là ngôi sao sáng giữa cả một bầu trời tri thức 📖📚.`,
    },
    90: {
        background: 'background-1',
        color: 'text-red',
        label: 'Hoa Mắt',
        imgSrc: 'hoa_mat',
        mainContent: `Phận làm hoa mắt, chưa một lần kêu ai. Nhìn về deadline mà thấy như công rộng việc dài 🎶 😵.`,
        subContent: `Bạn làm việc vì đam mê, có chí tiến thủ cao và luôn nỗ lực không ngừng nghỉ.`,
    },
    50: {
        background: 'background-2',
        color: 'text-pink',
        label: 'Hoa Quỳnh',
        imgSrc: 'hoa_quynh',
        mainContent: `Tính bạn làm mình thích mê
Sáng ra e ấp đêm về thăng hoa 💃🏻🕺🏻`,
        subContent: `Bạn nhạy cảm, sâu sắc và tinh tế. Màn đêm buông xuống cũng là lúc sức sáng tạo của bạn dồi dào và toả hương sắc nhất.`,
    },
    100: {
        background: 'background-2',
        color: '',
        label: 'Hoa Đồng Tiền',
        imgSrc: 'hoa_dong_tien',
        mainContent: `Uống nhầm 1 ánh mắt, cơn say theo cả đời.
Đó là mắt Bác cười, trên đồng tiền trong ví 🤑`,
        subContent: `Bạn vừa bay bổng lại vừa thực tế. Với tư duy tài chính tốt, thành công sẽ sớm đến với bạn thôi 💸.`,
    },
    40: {
        background: 'background-2',
        color: 'text-pink',
        label: 'Hoa "Oải" Hương',
        imgSrc: 'hoa_oai_huong',
        mainContent: `Nếu mà oải quá, giữa bộn bề cứ chồng lên nhau. Cùng lắm thì mình cafe, mình ăn uống, và mình đi chill 🎶.`,
        subContent: `Giống như loài hoa oải hương kiên cường, bạn không hề nhụt chí trước mọi khó khăn và thách thức của cuộc sống.`,
    },
    60: {
        background: 'background-1',
        color: '',
        label: 'Hoa Tay',
        imgSrc: 'hoa_tay',
        mainContent: `Đôi tay này làm nên tất cả, 
Có sức bạn sỏi đá cũng thành hoa 💪`,
        subContent: `Bạn khéo tay hay làm, và luôn làm chủ cuộc sống của mình. Mẫu người lý tưởng của gia đình chính bạn chứ ai.`,
    },
    11: {
        background: 'background-1',
        color: '',
        label: 'Hoa Quả Dầm',
        imgSrc: 'hoa_qua_dam',
        mainContent: `Quả dầm phải có sữa chua 
Nghiêm túc phải có bông đùa mới vui`,
        subContent: `Cuộc sống của bạn tràn ngập màu sắc. Bạn biết cân bằng cuộc sống và nuôi dưỡng các mối quan hệ. Thật là một người bạn lý tưởng!`,
    },
    30: {
        background: 'background-1',
        color: 'text-red',
        label: 'Hoa Hậu',
        labelForMale: 'Hoa Vương',
        imgSrc: 'hoa_hau',
        imgSrcForMale: 'hoa_vuong',
        mainContent: `Người vừa tài năng dễ thương, lại còn đẹp xinh nhất vùng 💐🌸🍃`,
        mainContentForMale: `Người vừa tài năng dễ thương, lại còn đẹp trai nhất vùng 💐🌸🍃`,
        subContent: `Bạn là mẫu người yêu bản thân và có khả năng truyền cảm hứng cho những người xung quanh mình.`,
    },
    80: {
        background: 'background-2',
        color: 'text-red',
        label: 'Hoa Dâm Bụt',
        imgSrc: 'hoa_dam_but',
        mainContent: `Có đỏ mà chẳng có thơm ❣️
Người đời nói thế nhưng hơm phải mình`,
        subContent: `Hẳn rồi, bạn là một người không những đẹp từ bên ngoài mà còn rất ngọt ngào từ bên trong.`,
    },
    10: {
        background: '',
        color: '',
        label: 'Hoa Hướng Dương',
        imgSrc: 'hoa_huong_duong',
        mainContent: `Đẹp dịu dàng mà không chói loá, là vầng mặt trời của em 🌻🎶☀️ `,
        subContent: `Như loài hướng dương luôn vươn tới ánh mặt trời, bạn luôn quyết tâm chinh phục những đỉnh cao mới và toả sáng trên mỗi bước đi`,
    },
    9: {
        background: '',
        color: 'text-pink',
        label: 'Hoa Cát Tường',
        imgSrc: 'hoa_cat_tuong',
        mainContent: `Như ý thì sẽ cát tường ☘️
Gặp thần may mắn trên đường thành danh 💐`,
        subContent: `Mang trong mình vẻ đẹp mong manh nhưng không dễ vỡ, bạn kiên cường và sẽ luôn có quý nhân phù trợ trên con đường đời.`,
    },
    8: {
        background: '',
        color: 'text-red',
        label: 'Hoa Hồng',
        imgSrc: 'hoa_hong',
        mainContent: `Hồng đẹp hồng phải có gai 🌹
Bạn tôi cũng thế, vừa tài vừa duyên 😘`,
        subContent: `Sở hữu cả sắc đẹp và trí thông minh, bạn đầy đam mê và cháy hết mình trong cuộc sống.`,
    },
    7: {
        background: '',
        color: '',
        label: 'Hoa Cúc Họa Mi',
        imgSrc: 'hoa_cuc_hoa_mi',
        mainContent: `Họa mi hót giữa bầu trời xanh 🐦
Họa mi long lanh chào ngày mới 🎵`,
        subContent: `Bạn là một người năng động, dễ hoà đồng, và yêu đời. Đó cũng chính là cách bạn tạo ra hạnh phúc cho chính mình.`,
    },
    6: {
        background: '',
        color: 'text-pink',
        label: 'Hoa Lan',
        imgSrc: 'hoa_lan',
        mainContent: `Lan thơm nở rộ bên nhà
Giống như bạn đó, ngọc ngà kiêu sa 😚`,
        subContent: `Sang trọng, quý phái, nghiêm túc và chân thành trong tình cảm, bạn chính món quà tuyệt vời nhất cho những người xung quanh.`,
    },
    5: {
        background: '',
        color: '',
        label: 'Hoa Loa Kèn',
        imgSrc: 'hoa_loa_ken',
        mainContent: `Có thể bạn nói hơi nhiều 📢
Không sao nếu đó là điều thật tâm.`,
        subContent: `Bạn luôn chân thành, đem lại lời hay ý đẹp cho mọi người. Nhất định bạn sẽ có cuộc sống hạnh phúc và sự nghiệp thành đạt.`,
    },
}
