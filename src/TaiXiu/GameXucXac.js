import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GameXucXac.css'
import ThongTinTroChoi from './ThongTinTroChoi'
import XucXac from './XucXac'

class GameXucXac extends Component {
    render() {
        return (
            <div className='game'>
                <div className='title-game text-center mt-5'>
                    GAME XÚC XẮC
                </div>

                <div className='row text-center mt-5'>
                    <div className='col-5'>
                        <button onClick={() => { this.props.datCuoc(true) }} className='btnGame'>TÀI</button>
                    </div>
                    <div className='col-2'>
                        <XucXac />
                    </div>
                    <div className='col-5'>
                        <button onClick={() => { this.props.datCuoc(false) }} className='btnGame'>XỈU</button>
                    </div>
                </div>

                <div className='thongTinXucXac text-center'>
                    <ThongTinTroChoi />

                    <button onClick={() => { this.props.playGame(true) }} className='btn btn-success p-2 mt-5'>Play game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action)
        },

        playGame: (play) => {
            let action = {
                type: 'PLAY'
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(GameXucXac)
