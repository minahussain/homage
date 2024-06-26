/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundSize: {
                'size-200': '200% 200%',
                'size-150': '150% 125%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-border':
                    'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(to right, rgb(147, 197, 253), rgb(124, 58, 237))',
            },
            colors: {
                'light-100': '#FAF8F0',
                'light-200': '#EFE8D0',
                'light-300': '#E8DDB5',
                'bg-primary-900': '#260D04B8',
                'bg-primary-800': '#662E1AB8',
                'bg-primary-700': '#A8634BE0',
                'bg-primary-600': '#894C375A',
                'bg-primary-500': '#A8634B14',
                'bg-primary-400': '#A8634B0D',
                'primary-900': '#260D04',
                'primary-800': '#782C11',
                'primary-700': '#A8634B',
                'primary-400': '#A88072',
                'primary-300': '#EECBBE',
                'primary-200': '#EECBBE',
                'primary-100': '#F2E0DA',
                'accent-purple': '#EFE4FC',
                'accent-green-500': '#7CA93A',
                'accent-green-100': '#D1DCBF',
                'accent-pink-500': '#FD3E81',
                'accent-pink-100': '#F3C8D7',
                'accent-blue-500': '#296EB4',
                'accent-blue-100': '#E4F0FC',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.clip-padding-border': {
                    backgroundClip: 'padding-box, border-box',
                },
                '.origin-padding-border': {
                    backgroundOrigin: 'padding-box, border-box',
                },
            })
        },
    ],
}
