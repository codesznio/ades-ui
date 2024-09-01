import { defineConfig, mergeConfig } from 'vite'

// Config
import baseConfig from '../../developer/config/vite/vite.react-library.mjs'

export default mergeConfig(baseConfig, defineConfig({}))
