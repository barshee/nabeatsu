import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UPDATE_COUNT, RESET_COUNT } from '../store/actionTypes'
import NabeatsuView from './NabeatsuView'

const buttonStyles = {
  fontFamily: 'monospace',
  fontSize: 16,
  appearance: 'none',
  WebkitAppearance: 'none',
  display: 'inline-block',
  color: '#FFF',
  background: '#222',
  padding: 12,
  borderRadius: 4
}

class Nabeatsu extends Component {
  render() {
    const { count, update, reset } = this.props
    return (
      <div>
        <NabeatsuView
          count={ count }
          nabeatsu={ this.isNabeatsu() }
          jack={ this.isJack() }
        />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button style={buttonStyles} onClick={ () => update(-1) } disabled={ count <= 0 }>DECREMENT</button>
          <button style={buttonStyles} onClick={ () => reset() }>RESET</button>
          <button style={buttonStyles} onClick={ () => update(1) }>INCREMENT</button>
        </div>
      </div>
    )
  }
  isNabeatsu() {
    // 3の倍数か3のつく数字でtrueを返却する
    return this.props.count !== 0 && (this.props.count % 3 === 0 || /3/.test(String(this.props.count)))
  }
  isJack() {
    // 24の倍数の時にtrueを返却
    return this.props.count !== 0 && this.props.count % 24 === 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
    update(value) { dispatch({ type: UPDATE_COUNT, value }) },
    reset() { dispatch({ type: RESET_COUNT }) }
  }
}

function mapStateToProps(state) {
  return state.count
}

export default connect(mapStateToProps, mapDispatchToProps)(Nabeatsu)