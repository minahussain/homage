import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const RightArrow = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, ...props }, ref) => (
        <svg
            ref={ref}
            {...props}
            className={className}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10.5 7H0.5" stroke="#FAF8F0" stroke-width="2" />
            <path
                d="M7.46484 11.155L11.6199 6.99994L7.46484 2.84497"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="square"
            />
        </svg>
    )
)

RightArrow.displayName = 'RightArrow'
export default RightArrow
