import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const myCustomTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#A1887F',
        primary: '#F44336',
        text: '#666666',
        secondary: '#03DAC6',
        textSpan: '#1a1a1a',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomTheme',
        themes: {
            myCustomTheme,
        }
    }
})

export default vuetify