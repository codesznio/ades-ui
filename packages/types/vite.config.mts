import { defineConfig, mergeConfig } from 'vite'

// Config
import baseConfig from '../../developer/config/vite/vite.models.mts'

export default mergeConfig(baseConfig, defineConfig({}))
