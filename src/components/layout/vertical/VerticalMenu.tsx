import { useParams } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Menu, SubMenu, MenuItem } from '@menu/vertical-menu';
import CustomChip from '@core/components/mui/Chip';
import useVerticalNav from '@menu/hooks/useVerticalNav';
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon';
import menuItemStyles from '@core/styles/vertical/menuItemStyles';
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles';

const VerticalMenu = ({ scrollMenu }: Props) => {
  const theme = useTheme();
  const verticalNavOptions = useVerticalNav();
  const params = useParams();
  const { isBreakpointReached, transitionDuration } = verticalNavOptions;
  const { lang: locale } = params;

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar;

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false),
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true),
          })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className="tabler-circle text-xs" /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem href={`/${locale}/dashboards/ecommerce`} className="d-flex align-items-center">
          <i className="tabler-smart-home me-2" style={{ fontSize: '1.25rem' }} />
          <span className="me-auto">Início</span>
          <CustomChip label="5" size="small" color="error" round="true" className="ms-2" />
        </MenuItem>

        <SubMenu label="Produtos" icon={<i className="tabler-box" style={{ fontSize: '1.25rem' }} />}>
          <MenuItem href={`/${locale}/apps/ecommerce/products/list`}>Todos os Produtos</MenuItem>
          <MenuItem href={`/${locale}/apps/ecommerce/products/add`}>Criar Produto</MenuItem>
        </SubMenu>

        <SubMenu label="Pedidos" icon={<i className="tabler-clipboard-list" style={{ fontSize: '1.25rem' }} />}>
          <MenuItem href={`/${locale}/apps/ecommerce/orders/list`}>Todos pedidos</MenuItem>
          <MenuItem href={`/${locale}/apps/ecommerce/orders/create`}>Criar Pedido</MenuItem>
          <MenuItem href={`/${locale}/apps/ecommerce/orders/abandoned-checkout`}>Checkout abandonado</MenuItem>
          <MenuItem href={`/${locale}/apps/ecommerce/orders/declined-card`}>Cartão recusado</MenuItem>
          <MenuItem href={`/${locale}/apps/ecommerce/orders/chargeback`}>Chargeback</MenuItem>
        </SubMenu>

        <MenuItem href={`/${locale}/apps/ecommerce/customers/list`} className="d-flex align-items-center">
          <i className="tabler-users me-2" style={{ fontSize: '1.25rem' }} />
          Clientes
        </MenuItem>

        <MenuItem href={`/${locale}/dashboards/analytics`} className="d-flex align-items-center">
          <i className="tabler-chart-bar me-2" style={{ fontSize: '1.25rem' }} />
          Análises
        </MenuItem>

        <SubMenu label="Checkout" icon={<i className="tabler-credit-card" style={{ fontSize: '1.25rem' }} />}>
          <MenuItem href={`/${locale}/apps/checkout/create`}>Criar Checkout</MenuItem>
          <MenuItem href={`/${locale}/apps/checkout/edit`}>Editar Checkout</MenuItem>
        </SubMenu>

        <SubMenu label="Apps" icon={<i className="tabler-apps" style={{ fontSize: '1.25rem' }} />}>
          <MenuItem href={`/${locale}/apps/installed`}>Apps instalados</MenuItem>
          <MenuItem href={`/${locale}/apps/install`}>Instalar app</MenuItem>
        </SubMenu>

        <SubMenu label="Financeiro" icon={<i className="tabler-currency-dollar" style={{ fontSize: '1.25rem' }} />}>
          <MenuItem href={`/${locale}/apps/finance/overview`}>Visão geral</MenuItem>
          <MenuItem href={`/${locale}/apps/finance/statement`}>Extrato</MenuItem>
        </SubMenu>
      </Menu>
    </ScrollWrapper>
  );
};

export default VerticalMenu;
