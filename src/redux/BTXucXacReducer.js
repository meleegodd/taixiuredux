const stateDefault = {
    taiXiu: true,
    mangXucXac: [
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
}

const BTXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu
            return { ...state }
        case 'PLAY':
            let mangRandom = []
            let tongSoDiem = 0;
            for (let i = 0; i < 3; i++) {
                let soRandom = Math.floor(Math.random() * 6) + 1;
                tongSoDiem += soRandom
                let xucXacRamdom = { ma: soRandom, hinhAnh: `./img/gameXucXac/${soRandom}.png` }
                mangRandom.push(xucXacRamdom)
            }
            if ((state.taiXiu === true && tongSoDiem >= 11) || (state.taiXiu === false && tongSoDiem < 11)) {
                state.soBanThang += 1
            }
            state.mangXucXac = mangRandom
            state.tongSoBanChoi += 1
            return { ...state }
        default: return { ...state }
    }
}

export default BTXucXacReducer;