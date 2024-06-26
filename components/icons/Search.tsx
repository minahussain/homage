import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Search = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, ...props }, ref) => (
        <svg
            ref={ref}
            {...props}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8132 5.32792C16.1648 7.67954 16.1646 11.4833 13.8239 13.824C11.4833 16.1646 7.67952 16.1648 5.32791 13.8132C2.9763 11.4616 2.97655 7.65779 5.31716 5.31717C7.65778 2.97656 11.4616 2.97631 13.8132 5.32792ZM16.1413 14.1622C18.3248 11.041 18.0193 6.70563 15.2274 3.91371C12.0973 0.783578 7.02714 0.778766 3.90295 3.90296C0.778754 7.02715 0.783566 12.0973 3.9137 15.2274C6.90069 18.2144 11.6543 18.3554 14.7977 15.6471L18.9655 19.8149L19.6726 20.522L21.0868 19.1078L20.3797 18.4006L16.1413 14.1622Z"
                fill="currentColor"
            />
        </svg>
    )
)

Search.displayName = 'Search'
export default Search
