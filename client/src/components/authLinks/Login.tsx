import React from 'react'

type Props = {
  className?: string;
}

export default function Login({className}: Props) {

    const status = 'loggedOut';

  return (
    <button className={className}>
        {status === 'loggedOut' ? 'Login' : 'Write'}
    </button>
  )
}
