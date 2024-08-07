import classnames from 'classnames';
import { CardProps } from './type';
import './style.scss';
import '@/styles/index.scss';

export const Card = (props: CardProps) => {
  const prefixCls = 'xbear-card';
  const {
    title,
    cover,
    className,
    extra,
    style,
    shadow,
    titleOverflowHidden,
    actions,
    showShadowWhenHover,
    children,
    // loading,
    ...restProps
  } = props;

  return (
    <section
      className={classnames(prefixCls, className, {
        [`${prefixCls}-shadow`]: shadow,
        [`${prefixCls}-hover`]: showShadowWhenHover,
        [`${prefixCls}-cover`]: cover,
        // [`${prefixCls}-loading`]: loading,
      })}
      style={style}
      {...restProps}
    >
      {(title || extra) && (
        <div className={classnames(`${prefixCls}-header`)}>
          {cover && (
            <div className={classnames(`${prefixCls}-header-cover`)}>
              <img src={cover} alt={title || cover} />
            </div>
          )}
          {title && (
            <div
              className={classnames(`${prefixCls}-header-title`, {
                [`${prefixCls}-overflow-hidden`]: titleOverflowHidden,
              })}
            >
              {title}
            </div>
          )}
          {extra && <div className={classnames(`${prefixCls}-header-extra`)}>{extra}</div>}
        </div>
      )}
      <div className={classnames(`${prefixCls}-content`)}>{children}</div>
      {actions && actions.length >= 1 && (
        <div className={classnames(`${prefixCls}-actions`)}>
          {actions.map((action, key) => (
            <div key={key} className={classnames(`${prefixCls}-actions-item`)} onClick={action.event}>
              {action.name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Card;
