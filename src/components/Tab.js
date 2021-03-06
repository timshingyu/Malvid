'use strict'

const { css } = require('glamor')
const propTypes = require('prop-types')

const h = require('../utils/h')
const createRoute = require('../utils/createRoute')
const { HEIGHT } = require('../constants/sizes')
const { BLUE, MID } = require('../constants/colors')

const style = {

	self: css({
		flexGrow: '1',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0 .95em',
		width: '100%',
		height: HEIGHT,
		color: 'currentcolor',
		textOverflow: 'ellipsis',
		textDecoration: 'none',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		outline: 'none',
		cursor: 'default',
		transition: 'box-shadow .3s ease',
		boxShadow: `inset 0 -1px 0 ${ MID }, inset -1px 0 0 ${ MID }`,
		':last-child': {
			boxShadow: `inset 0 -1px 0 ${ MID }`
		}
	}),

	active: css({
		boxShadow: `inset 0 -2px 0 ${ BLUE }, inset -1px 0 0 ${ MID }`,
		':last-child': {
			boxShadow: `inset 0 -2px 0 ${ BLUE }`
		}
	})

}

module.exports = ({ id, label, active, currentComponent }) => (

	h('a', {
		className: css(style.self, active && style.active).toString(),
		href: createRoute(currentComponent.id, id)
	}, label)

)

module.exports.propTypes = {

	id: propTypes.string.isRequired,
	label: propTypes.string.isRequired,
	active: propTypes.bool.isRequired,
	currentComponent: propTypes.object.isRequired

}