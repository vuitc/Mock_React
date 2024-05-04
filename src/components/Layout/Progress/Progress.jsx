import clsx from 'clsx';
import React from 'react';
import '~/assets/css/style.css';
function Progress({ item, active }) {
    const items = {
        width: '70%',
        height: '3px',
        background: 'linear-gradient(to right, rgb(59, 126, 255), rgb(59, 126, 255))',
        ...item,
    };
    const leftPosition = active === 1 ? `calc(100% - 10px)` : '100%';
    return (
        <div className="w-progress" style={{ width: '100%', height: '3px', borderRadius: '2px', background: '#ccc' }}>
            <div
                className={clsx('w-progress-bar', { active: active === 1 })}
                style={{ width: items.width, height: items.height, background: items.background, position: 'relative' }}
                data-width={items.width}
            >
                {active === 1 && (
                    <span
                        style={{
                            position: 'absolute',
                            top: '-24px',
                            left: leftPosition,
                            fontSize: '12px',
                            color: '#3b7eff',
                            fontWeight: '600',
                        }}
                    >
                        {items.width}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Progress;
