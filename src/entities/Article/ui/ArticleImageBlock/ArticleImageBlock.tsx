import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
	className?: string;
}

export const ArticleImageBlock = (props: ArticleImageBlockProps) => {
		const { className } = props;
		const { t } = useTranslation();
		return (
				<div className={classNames(cls.ArticleImageBlock, {}, [className])}>
				</div>
		);
};
