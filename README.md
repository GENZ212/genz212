# 🛡️ Human Rights Directory + Legal Hub

A comprehensive web application for finding human rights organizations, lawyers, medical support, and government contacts in Morocco. Built with Next.js, TypeScript, and Prisma.

## 🌟 Features

### Core Features
- **📂 Comprehensive Directory**: Searchable database of NGOs, lawyers, medical centers, and government institutions
- **🔍 Advanced Filtering**: Filter by category, location, language, and availability
- **👤 Individual Profiles**: Detailed contact pages with full information and quick actions
- **📊 Report System**: Submit and track human rights reports with anonymous option
- **👨‍💼 Admin Dashboard**: Manage contacts, review reports, and moderate content
- **🔐 Role-Based Authentication**: Different access levels for users, moderators, and admins

### Directory Categories
- **🏛️ NGOs**: Human rights organizations (AMDH, Amnesty International, etc.)
- **⚖️ Lawyers**: Verified lawyers specializing in human rights and protest law
- **🏥 Medical Support**: Doctors, hospitals, and medical centers offering assistance
- **📞 Hotlines**: 24/7 emergency contact lines
- **🏛️ Government**: Official institutions (CNDH, Ministry of Justice, etc.)

### Technical Features
- **📱 Responsive Design**: Mobile-first approach with touch-friendly interfaces
- **🌍 Multi-language**: Arabic, French, and English support
- **⚡ Real-time Search**: Instant filtering and search results
- **📤 Export Options**: PDF and CSV export for offline access
- **🛡️ Verification System**: Badge system for verified and trusted contacts

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd human-rights-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Update `.env` with your database and authentication details:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/rights_hub"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/[...nextauth]/   # NextAuth configuration
│   │   ├── contacts/             # Contacts CRUD API
│   │   └── reports/              # Reports API
│   ├── admin/                    # Admin dashboard
│   ├── directory/                # Directory pages
│   ├── reports/                  # Reports pages
│   └── layout.tsx                # Root layout
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── directory/                # Directory components
│   ├── reports/                  # Reports components
│   └── admin/                    # Admin components
├── lib/                          # Utilities and configurations
│   ├── auth.ts                   # NextAuth configuration
│   ├── prisma.ts                 # Prisma client
│   └── validation.ts             # Zod schemas
└── prisma/                       # Database schema
    └── schema.prisma
```

## 🗄️ Database Schema

### Core Models
- **User**: Authentication and role management
- **Contact**: Directory entries (NGOs, lawyers, etc.)
- **Report**: User-submitted reports and incidents
- **Category**: Contact categorization
- **Location**: Geographic locations
- **Media**: File attachments for reports and contacts

### Key Features
- **Multi-language support**: Arabic, French, English fields
- **Verification system**: Admin approval workflow
- **Emergency flagging**: Priority contact designation
- **Availability tracking**: Hours and status management
- **Social media integration**: Contact social links

## 🔐 Authentication & Authorization

### User Roles
- **USER**: Regular users who can submit reports
- **NGO**: Organization representatives
- **LAWYER**: Legal professionals
- **DOCTOR**: Medical professionals
- **MODERATOR**: Content moderators
- **ADMIN**: Full system administrators

### Authentication Providers
- **Google OAuth** (configured)
- **Email/Password** (credentials provider ready)

## 📱 API Endpoints

### Public Endpoints
- `GET /api/contacts` - Search and filter contacts
- `GET /api/contacts/[id]` - Get specific contact details
- `POST /api/reports` - Submit new report
- `GET /api/reports` - View reports (filtered by role)

### Admin Endpoints
- `GET /api/admin/contacts` - Admin contact management
- `POST /api/admin/contacts` - Create new contacts
- `PUT /api/admin/contacts/[id]` - Update contacts
- `DELETE /api/admin/contacts/[id]` - Delete contacts

## 🎨 UI Components

Built with [shadcn/ui](https://ui.shadcn.com/) and Tailwind CSS:

### Core Components
- **ContactCard**: Displays contact information with actions
- **FilterBar**: Advanced filtering interface
- **ReportForm**: Multi-step report submission
- **AdminDashboard**: Management interface
- **Navigation**: Role-based navigation menu

### Design System
- **Consistent spacing**: 4px base unit grid
- **Color scheme**: Accessible contrast ratios
- **Typography**: Clear hierarchy with proper sizing
- **Icons**: Lucide React icon library

## 🔧 Development

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
npm run db:studio  # Open Prisma Studio
```

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Husky**: Pre-commit hooks

## 🌐 Internationalization

### Supported Languages
- **Arabic (العربية)**
- **French (Français)**
- **English**

### Implementation
- Database fields for multiple languages
- UI language switching
- RTL support for Arabic

## 📤 Export Features

### Contact Export
- **PDF Generation**: Print-friendly contact sheets
- **CSV Export**: Spreadsheet-compatible format
- **Offline Access**: Cached contact lists

### Implementation
- **jsPDF**: PDF generation library
- **CSV Writer**: Custom CSV export functionality

## 🚀 Deployment

### Environment Setup
1. Configure production database
2. Set up authentication providers
3. Configure file upload storage
4. Set environment variables

### Recommended Platforms
- **Vercel**: Optimized for Next.js
- **Railway**: Full-stack deployment
- **DigitalOcean**: Custom infrastructure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Add proper documentation
- Test thoroughly before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Prisma** - Database ORM
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for human rights protection in Morocco**