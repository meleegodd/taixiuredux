import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((item, index) => {
            return <img className='ml-2' style={{ width: '45px' }} src={item.hinhAnh} alt={item.ma} key={index}></img>
        })
    }

    render() {
        return (
            <div>
                {this.renderXucXac()}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        mangXucXac: state.BTXucXacReducer.mangXucXac
    }
}

export default connect(mapStatetoProps)(XucXac)
