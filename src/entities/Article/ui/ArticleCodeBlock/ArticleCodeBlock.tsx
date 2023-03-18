import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
	className?: string;
}

export const ArticleCodeBlock = (props: ArticleCodeBlockProps) => {
		const { className } = props;
		const { t } = useTranslation();
		return (
				<div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
				</div>
		);
};
