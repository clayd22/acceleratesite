export default function FeatureCard({ title, description, icon }) {
    return (
      <div className="card p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src={icon} alt={title} />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-base text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    )
  }