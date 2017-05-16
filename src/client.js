'use strict'

const { h, render } = require('preact')
const { Provider } = require('preact-redux')
const { css, rehydrate } = require('glamor')

const createStore = require('./utils/createStore')
const global = require('./styles/global')

const Main = require('./components/Main')

const output = (store) => {

	const root = document.body
	const html = h(Provider, { store }, h(Main))

	render(html, root, root.firstElementChild)

}

const init = () => {

	// Rehydrate glamor state
	rehydrate(window.__GLAMOR__)

	// Inject global CSS
	css.insert(global)

	// Rehydrate store from state
	const store = createStore(window.__STATE__)

	// Render component with the same props as the server
	output(store)

}

if (typeof window!=='undefined') init()