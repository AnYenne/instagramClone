// 1. Import thư viện từ bên thứ ba.
import clsx from 'clsx'

// 2. Import các module liên quan đến React.
import React from 'react'

// 3. Import các helper, utils, constants.
// 4. Import các actions và selectors.
// 5. Import các components.
// 6. Import các style.
import styles from './Button.module.scss'

const Button = ({primary, children,
    whiteText,
    outline,
    fullWidth,
    halfWidth,
    roundSm,
    roundMd,
    roundLg,
    roundXl,
    grayText,
    facebookColor,
    text,
    normal,
    stylesCustom }) => {
  const classes = clsx(styles.btn, {
[styles.primary]:primary,
[styles.whiteText]:whiteText,
[styles.outline]:outline,
[styles.fullWidth]:fullWidth,
[styles.halfWidth]:halfWidth,
[styles.roundSm]:roundSm,
[styles.roundMd]:roundMd,
[styles.roundLg]:roundLg,
[styles.roundXl]:roundXl,
[styles.grayText]:grayText,
[styles.facebookColor]:facebookColor,
[styles.text]:text,
[styles.normal]:normal,
[styles.stylesCustom]:stylesCustom,
  })
  return (
    <div className={clsx(classes, 'margin' ) }  style={stylesCustom}>
        {children}
    </div>
  )
}

export default Button