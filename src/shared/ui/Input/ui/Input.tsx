import React, {
    InputHTMLAttributes, memo, useState, useEffect, useRef, RefObject,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const inputRef = useRef() as RefObject<HTMLInputElement>;

    const [isFocused, setIsFocused] = useState(false);

    const [caretPosition, setCaretPosition] = useState<number>(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const onSelect = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
        if (event.target instanceof HTMLInputElement) {
            setCaretPosition(event.target.selectionStart || 0);
        }
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder ? (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            ) : null}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused ? (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                ) : null}
            </div>

        </div>
    );
});
