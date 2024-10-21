import styles from './Button.module.scss'
import React from 'react'
import clsx from 'clsx'

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
      {console.log(stylesCustom)}
        {children}
    </div>
  )
}

export default Button