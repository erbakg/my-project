import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../module/Items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { text, path, Icon } = item;
    const { t } = useTranslation();
    return (
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
            to={path}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>{t(text)}</span>
        </AppLink>
    );
});
