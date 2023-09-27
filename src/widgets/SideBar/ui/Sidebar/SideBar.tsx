import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';


interface SidebarProps {
	className?: string;
}

export const SideBar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button className={"btn"} onClick={onToggle}>toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	)
}

