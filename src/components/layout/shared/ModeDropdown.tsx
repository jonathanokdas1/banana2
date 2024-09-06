'use client'

// React Imports
import { useEffect } from 'react'

// MUI Imports
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const ModeDropdown = () => {
  // Hooks
  const { settings, updateSettings } = useSettings()

  // Define o tema com base no sistema
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (settings.mode === 'system') {
      const newMode = prefersDarkScheme ? 'dark' : 'light'
      if (settings.mode !== newMode) {
        updateSettings({ mode: newMode })
      }
    }
  }, [settings.mode, updateSettings])

  // Alterna entre claro e escuro
  const toggleMode = () => {
    const newMode = settings.mode === 'light' ? 'dark' : 'light'
    updateSettings({ mode: newMode })
  }

  // Retorna o ícone correto com base no modo atual
  const getModeIcon = () => {
    return settings.mode === 'dark' ? 'tabler-moon-stars' : 'tabler-sun'
  }

  return (
    <Tooltip title={settings.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <IconButton onClick={toggleMode} className='text-textPrimary'>
        <i className={getModeIcon()} />
      </IconButton>
    </Tooltip>
  )
}

export default ModeDropdown
