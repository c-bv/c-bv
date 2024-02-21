import { cn } from '@lib/utils';

type TProfileImage = {
    size: 'small' | 'large';
    isInteractive?: boolean;
};

export const ProfileImage = (props: TProfileImage) => {
    return (
        <div
            className={cn('rounded-full bg-gradient-to-tl from-emerald-800/60 to-teal-400/60 shadow-lg', {
                'p-[2px]': props.size === 'small',
                'p-[3px]': props.size === 'large',
                'group transform transition ease-out hover:scale-105 hover:from-emerald-800 hover:to-teal-400 hover:shadow-teal-500/25 active:translate-y-px':
                    props.isInteractive,
                'ring-[5px] ring-emerald-500/10': !props.isInteractive
            })}
        >
            <div
                className={cn('rounded-full p-px', {
                    'h-[36px] w-[36px]': props.size === 'small',
                    'h-[64px] w-[64px]': props.size === 'large',
                    'transition duration-300 group-hover:scale-105': props.isInteractive
                })}
            >
                <img
                    src='/img/profile.jpg'
                    alt='A photo of Charles'
                    className='rounded-full'
                    width={props.size === 'small' ? 36 : 64}
                    height={props.size === 'small' ? 36 : 64}
                />
            </div>
        </div>
    );
};
